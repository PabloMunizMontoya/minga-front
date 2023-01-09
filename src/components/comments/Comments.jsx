import React,{useState, useRef} from "react";
import './comments.css'
import axios from "axios";
import { useDispatch } from "react-redux";
import  alertActions from '../../store/alert/actions.js'

export default function Comments(){
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const inputComment = useRef("")
/*   const formRef = useRef(""); */
  const {mingaAlert} = alertActions;
  const disPatch = useDispatch()

function handleSubmit(event) {
  event.preventDefault();
  setComments([...comments, newComment]);
  setNewComment('');}  

function emptyInput () {
 /*  let vaciarForm = document.getElementById("input").value = ""; */

}



function handleSendComment (event) {
  event.preventDefault()
  
  let data = {
      "chapter_id": "63ac47d8b4db2f7baacad498",
      "user_id": "63ac47d8b4db2f7baacad498",
      "text": inputComment?.current.value
  }
/*   formRef.current?.reset(); */
  axios.post(
      "http://localhost:8000/api/comments",data)
      .then( res =>  disPatch(mingaAlert("Done")) )
      .catch(err =>  disPatch(mingaAlert(err.response.data.response))     
    )
    
  }

  return (
    <div>      
        {comments.map(comment => (
          <div className="commentary" >
            <div className="divComments">
                <img className="photoComment" src="https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg" alt=""/>
                <h3>Ignacio Borraz</h3>
              </div>
          <p className="pComment" key={comment}>{comment}</p>
          <div className="commentfooter">
            <div  className="commentimgcom">
            <img className="imgconversacion" src="/assets/comment.png" alt="aa" />
            <p className="numComments">12</p> 
            <button className="butonComment">Reply          
            </button> 
            <img className="lapiz" src="/assets/lapiz.png" alt="Texto alternativo"/>          
            </div>            
            <p className="pdate">12 min ago</p>
          </div>
          </div>
        ))}

      <form /*  ref={formRef} */ onSubmit={handleSendComment} id="form">
        <input id="input" className="textareaComments"
        placeholder="Say something here..."
          type="text"
          ref={inputComment}
          value={newComment}
          
          onChange={event => setNewComment(event.target.value)}
        />
        <button onClick={emptyInput}  className="inputComments" type="submit"><img  className="send" src="/assets/enviar.png" alt="" /></button>
        
        
      </form>
    </div>
  );
}