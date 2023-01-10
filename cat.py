import subprocess
from sys import *
from transformers import pipeline
from transformers import logging


logging.set_verbosity_error()



# classifier_text=argv[1]
# classifier_labels=argv[2].split()

# classifier_text="Accenture will do 50% more business than last year"
# classifier_labels="Business Travel Leisure".split()

# classifier = pipeline("zero-shot-classification",model='roberta-large-mnli')
# result=classifier(classifier_text,classifier_labels)


# scores=result["scores"]
# labels=result['labels']


# result_dict=dict(map(lambda i,j : (i,j) , labels,scores))


# print(max(zip(result_dict.values(), result_dict.keys()))[1])
# def decorate():
#     print("="*len("2023-01-10 16:33:26.709008: I tensorflow/core/platform/cpu_feature_guard.cc:193] This TensorFlow binary is optimized"))


def categorize(*args):
   
    
    print(args)



    # logging.set_verbosity_error()
    # subprocess.run('source activate tf && ', shell=True)

    # classifier_text=args[0]
    # classifier_labels=args[1].split()
    print("="*len("2023-01-10 16:33:26.709008: I tensorflow/core/platform/cpu_feature_guard.cc:193] This TensorFlow binary is optimized"),"\n")

    classifier_text="I am going to mumbai tomorrow"
    classifier_labels="Business Travel Leisure".split()
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

# # print(categorize('Accenture will do 50% more business than last year', 'Business Travel Leisure'))
# categorize('Accenture will do 50% more business than last year', 'Business Travel Leisure')


# from transformers import logging
# logging.set_verbosity_error()
# classifier_text="Accenture will do 50% more business than last year"

# classifier_labels="Business Travel Leisure".split()
# classifier = pipeline("zero-shot-classification",model='roberta-large-mnli')
# result=classifier(classifier_text,classifier_labels)

