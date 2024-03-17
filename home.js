<script>document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.sqs-block-button-container a.sqs-block-button-element');
  if (button) {
    button.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default button action
      document.documentElement.style.overflowY = "auto"; // Ensure overflowY is enabled
      document.body.style.position = "static";

      var footer = document.querySelector('footer.sections');
      if (footer) {
        footer.style.opacity = "1"; // Set the opacity of the footer to 1
      }

      // Set the opacity of specific sections to 1
      var sections = document.querySelectorAll('[data-section-id="651f2b9dbb64e44fee313812"], [data-section-id="6521c78f1f0d4026748cbe8e"]');
      sections.forEach(function(section) {
        section.style.opacity = "1";
      });
    });
  }
});

</script>