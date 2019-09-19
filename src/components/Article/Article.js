import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'


const Article = props => {
  return (
    <div>
      { props.data ? 
        <Card>
          <CardContent>
            <Typography component="p">
                {`${props.data.name} ${props.data.lastname}`}
            </Typography>
            <Typography component="p">
              {`Возраст: ${props.data.age}`}
            </Typography>
            <Typography component="p">
              {`Пол: ${props.data.sex ==='m' ? "мужской" : "женский"}`}
            </Typography>
          </CardContent>
        </Card>
        : null
      }
    </div>
  );
};

export default Article;
