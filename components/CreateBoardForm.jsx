const CreateBoardForm = ({ board, setBoard, submitting, handleSubmit }) => {

  return (
    <div className="mt-[8rem]">
      <form onSubmit={handleSubmit} className="create-board-form flex flex-col">
        <label>Name your board:</label>
        <input 
          type="text" 
          onChange={(e) => setBoard({...board, name: e.target.value })}
          value={board.name}
          required
        />
        <label>Set a password:</label>
        <input 
          type="text" 
          onChange={(e) => setBoard({...board, password: e.target.value })}
          value={board.password}
          required
        />
        <button>Continue</button>
      </form>
    </div>
  )
}
export default CreateBoardForm