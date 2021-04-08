export default function InputBox() {
    return(
     <div className="inputbox">
        <form  className="inputbox-form">
            <label className="inputbox-label">
                <input type="text" name="name" />
            </label>
                <input type="submit" value="Enviar"  className="inputbox-button" />
        </form>
     </div>
    )
}