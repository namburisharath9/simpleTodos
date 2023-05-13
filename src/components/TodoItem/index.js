// Write your code here

const TodoItem = props => {
  const {tododetails, deleteUser} = props
  const {id, title} = tododetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-item">
      <p className="description">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
