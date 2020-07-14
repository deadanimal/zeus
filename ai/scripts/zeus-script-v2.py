from fastai import *
from fastai.tabular import *

PATH = '/notebooks/zeus/data_boss_edited.csv'
dataset = pd.read_csv(PATH, header=0, index_col=None, engine='python')

len(dataset)

dataset.head()

dataset = dataset.sort_values(by='Time', ascending=False)
dataset = dataset.reset_index(drop=True)

np.warnings.filterwarnings('ignore')

dataset.Delta = np.log(dataset.Delta)

add_datepart(dataset, "Time", drop=False)

def display_all(df):
    with pd.option_context("display.max_rows", 1000, "display.max_columns", 1000): 
        display(df)
        
display_all(dataset.tail(10).T)

procs=[FillMissing, Categorify, Normalize]

dataset.dtypes
g = dataset.columns.to_series().groupby(dataset.dtypes).groups
g

cat_vars = ['TimeIs_month_end','TimeIs_month_start','TimeIs_quarter_end','TimeIs_quarter_start','TimeIs_year_end','TimeIs_year_start','TimeYear','TimeMonth','TimeDay','TimeDayofweek','TimeDayofyear','TimeElapsed','Appliances','Date', 'Datetime']

cont_vars = ['Aggregated Current', 'Aggregated Power', 'Delta', 'Timestamp', 'Phase 1', 'Phase 2']

dep_var = 'Delta'
df = dataset[cat_vars + cont_vars + [dep_var,'Date']].copy()

max_y = np.max(dataset['Delta'])*1.2
y_range = torch.tensor([0, max_y], device=defaults.device)
y_range

learn = tabular_learner(data, layers=[1000,500], ps=[0.001,0.01], emb_drop=0.04, 
                        y_range=y_range, metrics=rmse)