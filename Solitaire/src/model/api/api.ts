import axios from 'axios'

export interface IFetchCard {
  code: string
  image: string
  images: {
    svg: string
    png: string
  }
  suit: string
  value: string
}

export const fetchCards = async (
  setCards: React.Dispatch<React.SetStateAction<IFetchCard[]>>
) => {
  try {
    const response = await axios.get(
      'https://deckofcardsapi.com/api/deck/new/draw/?count=52'
    )
    setCards(response.data.cards)
  } catch (error) {
    console.error('Failed to fetch cards:', error)
  }
}