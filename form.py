
from wtforms import Form,StringField, PasswordField, validators

class Tensorform(Form):
    Text = StringField('Text', [validators.Length(min=4, max=25)])
    Tags = StringField('Tag', [validators.Length(min=6, max=35)])
  

