function DarkTheme() {
  return (
    <style jsx global>
      {`
        /* Dark Theme */
        :root {
          --background-color: black;
          --link-color: gold;
          --text-color: lightgrey;
        }
      `}
    </style>
  );
}

export default DarkTheme;
