import { defaultTheme } from "react-admin";

export const IGTheme = {
  ...defaultTheme,
  components: {
    ...defaultTheme.components,
    RaList: {
      styleOverrides: {
        root: {
          "& .RaList-content": {
            boxShadow: "none",
          },
        },
      },
    },
    RaDatagrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFF",
          "& .RaDatagrid-headerCell": {
            fontWeight: "bold",
            backgroundColor: "#E5E4E4",
            border: "1px solid #D7D6D6",
            fontSize: "14px",
          },
          "& .RaDatagrid-rowCell	": {
            border: "1px solid #D7D6D6",
          },
        },
      },
    },
  },
};
