import warnings
import sklearn
from sklearn.ensemble import RandomForestClassifier
import pickle
import pandas as pd

# Suppress the warning
warnings.filterwarnings("ignore", category=UserWarning)

# Load the model from a file

# Get input from the user as an array
input_data = input().split()  # Assuming inputs are separated by spaces

# Convert input data to a DataFrame
input_df = pd.DataFrame([input_data], columns=['current_year', 'difficulty_level', 'tags',	'number_of_times_appeared',	'average_time_gap_between_appearances',	'years_since_last_appearance', 'total_years_since_first_appearance'])
input_df['difficulty_level'] = input_df['difficulty_level'].replace('Easy', 0)
input_df['difficulty_level'] = input_df['difficulty_level'].replace('Medium', 1)

tags_unique = ['Array', 'Hashing', 'Stacks and Queues', 'Linked List', 'Graph', 'Tree']
tags_map = {tag: i for i, tag in enumerate(tags_unique)}

input_df['tags'] = input_df['tags'].apply(lambda x: tags_map[x])

with open('best_model.pkl', 'rb') as f:
  model = pickle.load(f)
# Make a prediction
prediction = model.predict(input_df)

print(prediction)