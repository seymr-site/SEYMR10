export default function Page(){
  return (
    <div className="grid" style={{maxWidth:520}}>
      <h1 className="h1">Salon privé</h1>
      <form className="card" method="post" action="/api/auth/login">
        <label>Code d’invitation</label>
        <input name="code" style={{padding:10,borderRadius:8,background:'#111',border:'1px solid #222',color:'#fff',marginTop:8}} placeholder="Ex: SEYMR-INVITE-2025"/>
        <button className="btn" style={{marginTop:12}}>Entrer</button>
      </form>
    </div>
  )
}
