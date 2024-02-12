import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Category } from "../../../types";

export type MenuState = {
  categories: Category[];
  visibleCategory: string | null;
  isUserScroll: boolean;
};

const initialState: MenuState = {
  isUserScroll: false,
  visibleCategory: null,
  categories: [
    {
      name: "Salads",
      dishes: [
        {
          name: "The Italian",
          calories: 646,
          description:
            "Your chioce of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressing",
          price: 12.49,
        },
        {
          name: "The Italian",
          calories: 646,
          description:
            "Your chioce of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressing",
          price: 12.49,
        },
        {
          name: "The Italian",
          calories: 646,
          description:
            "Your chioce of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressing",
          price: 12.49,
        },
        {
          name: "The Italian",
          calories: 646,
          description:
            "Your chioce of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressing",
          price: 12.49,
        },
      ],
    },
    {
      name: "How Power Bowls",
      dishes: [
        {
          name: "The Italian",
          calories: 646,
          description:
            "Your chioce of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressing",
          price: 12.49,
        },
        {
          name: "The Italian",
          calories: 646,
          description:
            "Your chioce of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressing",
          price: 12.49,
        },
        {
          name: "The Italian",
          calories: 646,
          description:
            "Your chioce of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressing",
          price: 12.49,
        },
        {
          name: "The Italian",
          calories: 646,
          description:
            "Your chioce of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressing",
          price: 12.49,
        },
      ],
    },
    {
      name: "Gym Food",
      dishes: [
        {
          name: "The Italian",
          calories: 646,
          description:
            "Your chioce of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressing",
          price: 12.49,
        },
        {
          name: "The Italian",
          calories: 646,
          description:
            "Your chioce of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressing",
          price: 12.49,
        },
        {
          name: "The Italian",
          calories: 646,
          description:
            "Your chioce of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressing",
          price: 12.49,
        },
        {
          name: "The Italian",
          calories: 646,
          description:
            "Your chioce of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressing",
          price: 12.49,
        },
      ],
    },
  ],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setVisibleCategory: (state, action: PayloadAction<string | null>) => {
      state.visibleCategory = action.payload;
    },
    setIsUserScroll: (state, action: PayloadAction<boolean>) => {
      state.isUserScroll = action.payload;
    },
  },
});

export const { setVisibleCategory, setIsUserScroll } = menuSlice.actions;

export default menuSlice.reducer;
