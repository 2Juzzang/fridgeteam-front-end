import React from 'react';
import Grid from '../elements/Grid';
import Image from '../elements/Image';
import Text from '../elements/Text';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as listActions } from '../redux/modules/list';
import Loading from '../shared/Loading'
const List = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
   
  const is_loading = useSelector((state) => state.list.is_loading)

  const ingredient = props.match.params.id;
   
  // const title_list = [];
  // const image_list = [];
  // const total_list = [];
  React.useEffect(() => {
    dispatch(listActions.listAPI(ingredient));
  }, []);
  const recipe_list = useSelector((state) => state.list.list);
  

  if(is_loading) {
    return <Loading />;
  }


   if (recipe_list != 0)
     return (
       <Grid is_flex flex_wrap='wrap' justify_content='center' margin='0 auto'>
         {recipe_list.map((a, i) => {
           if (i % 2 == 0)
             return (
               <Grid
                 // 임시 width 5%

                 key={i}
                 _onClick={() => {
                   history.push(`/recipe/${a}`);
                 }}
                 margin='0 auto 0 0'
               >
                 {' '}
                 {recipe_list.map((a, k) => {
                   if (k == i + 1) {
                     return <Image src={a} size='470'></Image>;
                   }
                 })}
                 <Text padding='15px 0px' size='20px'>
                   {a}
                 </Text>
               </Grid>
             );
         })}
       </Grid>
     );
   else return <div>검색 결과가 없습니다!</div>;
};



export default List;
