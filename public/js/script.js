// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})
// Client-side search filter
function filterListings() {
  const query = document.getElementById('searchInput')?.value.toLowerCase();
  const category = document.getElementById('categoryFilter')?.value;
  if (query || category) {
    let url = '/listings?';
    if (query) url += `search=${query}&`;
    if (category) url += `category=${category}`;
    window.location.href = url;
  }
}

// Enter key on search
document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') filterListings();
});