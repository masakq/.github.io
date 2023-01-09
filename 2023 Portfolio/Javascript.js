<body>
  <!-- HTML content -->
  <script src="path/to/script.js">
  const button = document.getElementById('personal-info-button');
const personalInfo = document.getElementById('personal-info');

button.addEventListener('click', function() {
  if (personalInfo.style.display === 'none') {
    personalInfo.style.display = 'block';
  } else {
    personalInfo.style.display = 'none';
  }
});
</script>
</body>
