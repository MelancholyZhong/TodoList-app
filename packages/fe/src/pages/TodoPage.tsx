import { Container } from "@mui/material";
import { useStore } from "../context/TodoStore";
import { PageForm } from "../components/PageForm";
import { Route, useParams, useNavigate } from "react-router-dom";
import { TodoItem } from "../context/TodoStore";


export const TodoPage:React.FC = function TodoPage () {
    const {todos, removeTodo} = useStore()
    
    const backupItem : TodoItem = {
        id: '999',
        title:"Retrive failed",
        description: "This item does not exist",
        duedate:'0000',
        importance:1,
        completed:false,
    }

    const {id} = useParams()

    const navigate = useNavigate()

    const item = todos.find(i=>i.id === id)
    
    const onSubmit = () => {
        if(id != undefined){
            removeTodo(id)
        }
        navigate('/')
    }

    return(
        <Container>
            <PageForm originalItem={item != undefined ? item : backupItem} onSubmit={onSubmit} buttonName='Re-Add'/>
        </Container>
    )
}