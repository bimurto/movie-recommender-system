# -*- coding: utf-8 -*-
"""
Created on Thu May  3 11:11:13 2018

@author: Frank
"""

import random

import flask, flask_cors
import numpy as np
from surprise import SVD

from Evaluator import Evaluator
from MovieLens import MovieLens

app = flask.Flask(__name__)
flask_cors.CORS(app)

def LoadMovieLensData():
    ml = MovieLens()
    print("Loading movie ratings...")
    data = ml.loadMovieLensLatestSmall()
    print("\nComputing movie popularity ranks so we can measure novelty later...")
    rankings = ml.getPopularityRanks()
    return (ml, data, rankings)


np.random.seed(0)
random.seed(0)

# Load up common data set for the recommender algorithms
(ml, evaluationData, rankings) = LoadMovieLensData()

# Construct an Evaluator to, you know, evaluate them
evaluator = Evaluator(evaluationData, rankings)

# SVD
SVD = SVD()
evaluator.AddAlgorithm(SVD, "SVD")

# Fight!
evaluator.Evaluate(False)

# userratings = ml.getUserRatings(1)
# print(userratings)
# recommendation = evaluator.SampleTopNRecs(ml, 1)
# print(recommendation)


@app.route('/user/<id>', methods=['GET'])
def test(id=85):
    print(f"id={id}")
    result = {
        'userRating': ml.getUserRatings(int(id)),
        'recommendation': evaluator.SampleTopNRecs(ml, int(id))
    }
    return result

app.run()
