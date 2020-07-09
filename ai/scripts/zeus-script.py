# scriptKiddies

import numpy as np
import pandas as pd
import os
from argparse import ArgumentParser
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

PATH = '/notebooks/zeus/'
OUTPUT= '/notebooks/zeus/output'
FILE = 'a1'
dataset = pd.read_csv(PATH+FILE+'.csv',header=0, index_col=None)
# parser = ArgumentParser()
# parser.add_argument("-i", "--in", dest="input",
#                     help="location of input dataset")
# parser.add_argument("-o", "--out",dest="output",
#                     help="location of model"
#                     )

# dataset = parser.parse_args().input
# model_dir = parser.parse_args().output

# sal = pd.read_csv(dataset,header=0, index_col=None)
X = dataset[['timestamp']]
y = dataset['aggregated_power']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=10)

lm = LinearRegression() 
lm.fit(X_train,y_train) 

print('Intercept :', round(lm.intercept_,2))
print('Slope :', round(lm.coef_[0],2))

from sklearn.metrics import mean_squared_error
y_predict= lm.predict(X_test)
mse = mean_squared_error(y_predict,y_test)
print('MSE :', round(mse,2))

from sklearn.externals import joblib

if not os.path.exists(OUTPUT):
    os.makedirs(OUTPUT)
filename = OUTPUT+'/a1model.pkl'

joblib.dump(lm, filename)