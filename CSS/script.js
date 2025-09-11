function toggleDetails(radioName, detailsId) {
      const yesRadio = document.querySelector(`input[name="${radioName}"][value="yes"]`);
      const noRadio = document.querySelector(`input[name="${radioName}"][value="no"]`);
      const detailsSection = document.getElementById(detailsId);

      function updateDisplay() {
        if (yesRadio.checked) {
          detailsSection.style.display = 'block';
        } else {
          detailsSection.style.display = 'none';
        }
      }

      yesRadio.addEventListener('change', updateDisplay);
      noRadio.addEventListener('change', updateDisplay);
    }

    toggleDetails('ug', 'ug_details');
    toggleDetails('inter', 'inter_details');
    toggleDetails('matric', 'matric_details');