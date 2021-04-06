export default function profile({user}) {
  return (
      <div className='profile'>
        <ul className='list'>
            <div>
                <p className='value'>{user.name} ({user.nickname})</p>
                <img className='value-img' src={user.proflePic} />
            </div>
            <div>
                <a className='value-name'>Idade:</a>
                <p className='value'>{user.age}</p>
            </div>
            <div>
                <a className='value-name'>Genêro:</a>
                <p className='value'>{user.gender}</p>
            </div>
            <div>
                <a className='value-name'>Tema:</a>
                <p className='value'>{user.theme}</p>
            </div>
            <div>    
                <a className='value-name'>Função:</a>
                <p className='value'> {user.isaTeacher ? 'Professor' : ' Aluno '}</p>
            </div>
            <div>     
                <a className='value-name'>Turmas:</a>
                <p className='value'> {user.classes}</p>
            </div>
        </ul>
      </div>
  )
}