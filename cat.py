from sys import *
from transformers import pipeline
from transformers import logging


logging.set_verbosity_error()


def categorize(classifier_text,classifier_labels):
    print("="*len("2023-01-10 16:33:26.709008: I tensorflow/core/platform/cpu_feature_guard.cc:193] This TensorFlow binary is optimized"),"\n")
    classifier_labels.replace(',',' ')
    classifier_labels=classifier_labels.split()
    print(classifier_text)
    print(classifier_labels)
    print("="*len("2023-01-10 16:33:26.709008: I tensorflow/core/platform/cpu_feature_guard.cc:193] This TensorFlow binary is optimized"),"\n")



    classifier = pipeline("zero-shot-classification",model='roberta-large-mnli')
    result=classifier(classifier_text,classifier_labels)

    scores=result["scores"]
    labels=result['labels']
    
    print("="*len("2023-01-10 16:33:26.709008: I tensorflow/core/platform/cpu_feature_guard.cc:193] This TensorFlow binary is optimized"))
    print(scores)
    print(labels)
    print("="*len("2023-01-10 16:33:26.709008: I tensorflow/core/platform/cpu_feature_guard.cc:193] This TensorFlow binary is optimized"))
    
    result_dict=dict(map(lambda i,j : (i,j) , labels,scores))
    print(max(zip(result_dict.values(), result_dict.keys()))[1])

    return max(zip(result_dict.values(), result_dict.keys()))[1]
