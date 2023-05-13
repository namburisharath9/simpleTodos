// Write your code here

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {id, title} = todoDetails

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
