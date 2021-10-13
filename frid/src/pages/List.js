import React from 'react';
import Grid from '../elements/Grid';
import Image from '../elements/Image';
import Text from '../elements/Text';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as listActions } from '../redux/modules/list';
const List = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const ingredient = props.match.params.id;

  const title_list = [];
  const image_list = [];
  const total_list = [];
  React.useEffect(() => {
    dispatch(listActions.listAPI(ingredient));
  }, []);
  const recipe_list = useSelector((state) => state.list.list);
  let j,
    k = 0;

  for (let i = 0; i < recipe_list.length; i++) {
    if (i % 2 === 0) {
      title_list[k] = recipe_list[i];
      k++;
    } else {
      image_list[j] = recipe_list[i];
      j++;
    }
  }

  for (j = 0; j < title_list.length; j++) {
    let Obj = {
      title: '',
      image: '',
      tag: '',
    };
    Obj.title = title_list[j];
    Obj.image = image_list[j];
    total_list[j] = Obj;
  }
  console.log(title_list)
  console.log(image_list);
  return (
    <Grid is_flex flex_wrap='wrap' justify_content='center' width='100%'>
      {recipe_list.map((a, i) => {
        if(i%2==0)
        return (
          <Grid
            // 임시 width 5%
           
            key={i}
            _onClick={() => {
              history.push(`/recipe/${a}`);
            }}
            margin='0 auto 0 0'
         
          > {
            recipe_list.map((a,k) =>{
              if(k==i+1){
                 return <Image src={a} size='470'></Image>;
              }
             
            })
          }
            
            <Text padding='15px 0px' size='20px'>
              {a}
            </Text>
          </Grid>
        );
       
         
      })}
    </Grid>
  );
};

export default List;
