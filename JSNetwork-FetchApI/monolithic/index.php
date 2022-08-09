<form action="/save.php" method="post" id="form">
    <input type="text" name="firstname" id="firstname" required>
    <input type="text" name="lastname" id="lastname" required>

    <input type="submit" value="Send">
</form>

<script>
    document.getElementById('form').addEventListener('submit', function(event){
        let firstName = document.getElementById("firstname").value 
        let lastName = document.getElementById("lastname").value 
        if(firstName.length <= 1 || lastName.length <= 1){
            alert("enter appropriate names");
            event.preventDefault()
        }
    })
</script>