import React from 'react'
import './styles/style.css'
import { Link, navigate } from '@reach/router';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
const AuthorsList=(props) => {
  const { removeFromDom } = props;

    return (
        <div>
            <Link to="/new">Add an Author</Link>
            <p>We have qoutes by:</p>
                  <table >
                <tr>
                  <th>Author</th>
                  <th>Actions Available</th>
                </tr>
                {props.authors.map((author)=>{
               return <tr>
                  <td>{author.name}</td>
                  <td><EditButton authorId={author._id} successCallback={()=>navigate("/")}/> 
                  <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                  </td>
                </tr>
             
            })}
             </table>
        </div>
       
    )
}
export default AuthorsList;
