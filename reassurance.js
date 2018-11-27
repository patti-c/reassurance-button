const reassuranceButton = () => {

  const reassuringText = [
    "You have so much time left. You can do this. :)",
    "John Cena believes in you",
    "You are a poetic and noble land-mermaid.",
    "You are a beautiful, talented, brilliant, powerful muskox.",
    "You are an opalescent tree shark.",
    "You are a rainbow infused space unicorn.",
    "You are a beautiful, naïve, sophisticated newborn baby.",
    "You are a beautiful tropical fish - smart as a whip and cool under pressure.",
    "You are a beautiful, sassy mannequin come to life."
  ]

  return <button
            style={{
              'background': 'pink',
              'border-radius': '20px',
              'border': '2px solid #e75480',
              'font-weight': 'bold',
              'font-size': '.8em',
              'color': '#e75480'
            }}
          onClick={
            () => alert(reassuringText[Math.floor(Math.random()*reassuringText.length)])
          }>💖 Get Reassured 💖</button>
}
