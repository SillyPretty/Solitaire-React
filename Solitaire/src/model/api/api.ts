import axios from 'axios'

import {
  ICard
} from '../interfaces/ICard.interface'

export const fetchCards = async (
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>
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