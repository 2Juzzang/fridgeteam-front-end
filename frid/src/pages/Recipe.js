import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../elements/Image";
import Text from "../elements/Text";
import Comment from "../components/Comment";
import { actionCreators as recipeActions } from "../redux/modules/recipe";
import CommentList from "../components/CommentList";
import Loading from '../shared/Loading';
const Recipe = (props) => {
  const recipe = props.match.params.name;
  const list = props.match.params.name;

   const is_loading = useSelector((state) => state.recipe.is_loading);


  console.log("레시피", recipe);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(recipeActions.recipeAPI(recipe));
    dispatch(recipeActions.findRecipe(list))
  }, []);
  const recipe_list = useSelector((state) => state.recipe.recipe);
  console.log(recipe_list);

   if (is_loading) {
     return <Loading />;
   }

  return (
    <>
      <Image size="1000" src={recipe_list[1]}></Image>
      <Text bold size="36px" padding="20px 0">
        {recipe_list[0]}
      </Text>
      <hr />
      <Text bold size="24px" padding="20px 0">
        재료
      </Text>
      <Text margin="0 0 20px 0">{recipe_list[2]}</Text>

      <Text margin="0 0 10px 0" bold size="24px" padding="10px 0">
        RECIPE
      </Text>
      {recipe_list.map((a, i) => {
        if (i > 2) return <Text margin="0 0 20px 0">{recipe_list[i]}</Text>;
      })}
      <hr style={{ marginBottom: "20px" }} />

      <Comment post_id={recipe}></Comment>
      <CommentList post_id={recipe}></CommentList>
    </>
  );
};

export default Recipe;
