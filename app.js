function getActivity() {
    fetch('http://www.boredapi.com/api/activity/')
      .then(response => response.json())
      .then(data => {
        document.getElementById('activity').textContent = data.activity;
      })
      .catch(error => {
        console.log('Ha ocurrido un error:', error);
      });
    }