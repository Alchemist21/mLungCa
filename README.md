Machine Learning using Javascript


Instructions:

1. Fork this repo
2. At your terminal, Create your own directory mLungCa
3. Inside your created mLungCa directory, clone the file using "git clone thefileyouwantcopied "
4. Make sure you have node if not, go to node.js and install
5. Run using "node index"

What we want:

1. We want to predict whether our patient A.O who is a smoker and is 60 years old has Lung Cancer 

What we have:

2. We have a data set which we plug into our machine learning model 

Dataset:

P.J non smoker, > 55 years, (+) Lung Cancer
V.S smoker, > 55 years old, (+) Lung cancer
C.P non smoker, < 55 years old, (-) Lung Cancer
L.C smoker, > 55 years old, (+) Lung Cancer 
U.P non smoker, < 55 years old, (+) Lung Cancer
A.T smoker, > 55 years old, (+) Lung cancer
K.M smoker, > 55 years old, (+) Lung cancer
O.L non smoker, > 55 years old, (-) Lung Cancer
V.P smoker, > 55 years old, (+) Lung cancer
R.T smoker, > 55 years old, (-) Lung Cancer

 
Definition of variables

Input : variable 1. smoker (0=non, 1); variable 2. > 55 years old (0=non, 1)
Output: variable 3. Lung cancer (0=non, 1)

Question: 

Given only the following data set. What is the probability that our 60 year old patient A.O. who is a smoker has Lung Cancer? 
Note that this is for exercise purposes and we are only looking for association, not causation.

Answer: 79%
