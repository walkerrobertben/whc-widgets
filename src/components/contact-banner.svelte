<div class="top-bar py-1">
  <div class="banner px-4 mx-auto text-white flex items-center">
    <a class="flex items-center mr-4" href="tel:+{phone}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 mr-1">
        <path fill="currentColor" d="m20.965 16.856-.844 3.55c-.105.528-.527.88-1.055.88C10.207 21.25 3 14.042 3 5.183c0-.528.316-.95.844-1.055l3.55-.844c.493-.105 1.02.176 1.231.633l1.652 3.832c.176.457.07.984-.316 1.266l-1.899 1.547a12.2 12.2 0 0 0 5.626 5.59l1.546-1.9c.282-.35.809-.491 1.266-.316l3.832 1.653c.457.246.738.773.633 1.265"></path>
      </svg>
      <span>{phone}</span>
    </a>
    <a class="flex items-center mr-auto" href="mailto:+{email}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" class="h-3 mr-1">
        <path fill="currentColor" d="M20 4.608v8.142a3.25 3.25 0 0 1-3.066 3.245L16.75 16H3.25a3.25 3.25 0 0 1-3.245-3.066L0 12.75V4.608l9.652 5.056a.75.75 0 0 0 .696 0zM3.25 0h13.5a3.25 3.25 0 0 1 3.234 2.924L10 8.154.016 2.923A3.25 3.25 0 0 1 3.064.005zh13.5z"></path>
      </svg>
      <span>{email}</span>
    </a>
    <a class="bg-white rounded-full w-5 h-5 mr-2" href="{instagram}">
      <svg viewBox="0 0 24 24" style="transform: scale(0.6)">
        <path fill="rgb(221, 79, 126)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
      </svg>
    </a>
    <a class="bg-white rounded-full w-5 h-5" href="{facebook}">
      <svg viewBox="0 0 512 512">
        <path fill="#1B74E4" d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
      </svg>
    </a>
  </div>
</div>

<script lang="ts">
  const phone = '+44 7907 478805';
  const email = 'info@wehostchester.uk';
  const facebook = 'https://www.facebook.com/wehostchester/';
  const instagram = 'https://www.instagram.com/wehostchester/';
</script>

<style lang="postcss">
  @tailwind base;
  @tailwind utilities;

  .top-bar {
    background-color: rgb(51, 26, 5);
  }
  .banner {
    max-width: 76.5rem;
  }
</style>
