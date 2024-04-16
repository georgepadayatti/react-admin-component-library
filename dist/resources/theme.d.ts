export const IGTheme: {
    components: {
        RaList: {
            styleOverrides: {
                root: {
                    "& .RaList-content": {
                        boxShadow: string;
                    };
                };
            };
        };
        RaDatagrid: {
            styleOverrides: {
                root: {
                    backgroundColor: string;
                    "& .RaDatagrid-headerCell": {
                        fontWeight: string;
                        backgroundColor: string;
                        border: string;
                        fontSize: string;
                    };
                    "& .RaDatagrid-rowCell\t": {
                        border: string;
                    };
                };
            };
        };
    };
    sidebar?: {
        width?: number | undefined;
        closedWidth?: number | undefined;
    } | undefined;
    mixins?: import('@mui/material/styles/createMixins').MixinsOptions | undefined;
    palette?: import('@mui/material').PaletteOptions | undefined;
    shadows?: import('@mui/material').Shadows | undefined;
    transitions?: import('@mui/material').TransitionsOptions | undefined;
    typography?: import('@mui/material').TypographyVariantsOptions | ((palette: import('@mui/material').Palette) => import('@mui/material').TypographyVariantsOptions) | undefined;
    zIndex?: Partial<import('@mui/material').ZIndex> | undefined;
    unstable_strictMode?: boolean | undefined;
    unstable_sxConfig?: import('@mui/system').SxConfig | undefined;
    direction?: import('@mui/system').Direction | undefined;
    shape?: Partial<import('@mui/system').Shape> | undefined;
    breakpoints?: import('@mui/system').BreakpointsOptions | undefined;
    spacing?: import('@mui/system').SpacingOptions | undefined;
};
