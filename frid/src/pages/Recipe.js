import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../elements/Image";
import Text from "../elements/Text";
import { actionCreators as recipeActions } from '../redux/modules/recipe';

const Recipe = (props) => {
 
  const recipe = props.match.params.name;  //value값 가져오기 recipe이름 가져오기
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(recipeActions.recipeAPI(recipe));
  }, []);
  const recipe_list = useSelector((state) => state.recipe.recipe);
 console.log(recipe_list)
  
  return (
    <>
      <Image size='1000' src={recipe_list[1]}></Image>
      <Text bold size='36px' padding='20px 0'>
        {recipe_list[0]}
      </Text>
      <hr />
      <Text bold size='24px' padding='20px 0'>
        재료
      </Text>
      <Text margin='0 0 20px 0'>{recipe_list[2]}</Text>
      <Text bold size='24px' padding='10px 0'>
        RECIPE
      </Text>
      {recipe_list.map((a,i)=>{
          if(i>2)
          return (
             <Text margin='0 0 20px 0'>{recipe_list[i]}</Text>
          )
      })}

    
    </>
  );
};

export default Recipe;
