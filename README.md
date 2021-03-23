# Movie Recommendation System with Matrix Factorization

### Problem
Provide personalized movie recommendations to each user based on their previously rated movies. 

### DataSet 
We are using movielens 100k dataset for this problem

### Metrics

|Algorithm  | RMSE      |  MAE      |   HR      |     cHR   |    ARHR   | Coverage  | Diversity |Novelty      |
|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-------------|
|SVD        |**0.9039** |**0.6984** |**0.0283** |**0.0283** |**0.0119** |0.9478     |0.0428     |494.8547     |
|User KNN   |0.9961     |0.7711     |0.0000     |0.0000     |0.0000     |**1.0000** |**0.8586** |5654.1042    |
|Item KNN   |0.9995     |0.7798     |0.0000     |0.0000     |0.0000     |0.9896     |0.6494     |**6740.0228**|
|Random     |1.4385     |1.1478     |0.0089     |0.0089     |0.0015     |**1.0000** |0.0719     |557.8365     |

**Legend:**  

**RMSE :**      Root Mean Squared Error. Lower values mean better accuracy.  
**MAE :**       Mean Absolute Error. Lower values mean better accuracy.  
**HR :**        Hit Rate; how often we are able to recommend a left-out rating. Higher is better.  
**cHR :**       Cumulative Hit Rate; hit rate, confined to ratings above a certain threshold. Higher is better.  
**ARHR :**      Average Reciprocal Hit Rank - Hit rate that takes the ranking into account. Higher is better.  
**Coverage :**  Ratio of users for whom recommendations above a certain threshold exist. Higher is better.  
**Diversity :** 1-S, where S is the average similarity score between every possible pair of recommendations
                for a given user. Higher means more diverse.  
**Novelty :**   Average popularity rank of recommended items. Higher means more novel.  