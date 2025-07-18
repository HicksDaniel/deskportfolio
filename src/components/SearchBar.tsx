// components/SearchBar.tsx
import React from "react";
import {
    FormControl,
    OutlinedInput,
    InputAdornment,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

interface SearchBarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChange,
    placeholder = "Search…",
}) => (
    <FormControl
        variant="standard"
        sx={{
            display: "flex",
            alignSelf: "flex-end",
            margin: "10px",
            width: "50%",
            bgcolor: "rgba(0,0,0,0.1)",

            borderRadius: "50px",
            backdropFilter: "blur(10px)",
            "& .MuiOutlinedInput-root": {
                color: "#cacaca",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                "& fieldset": {
                    border: "none",
                },
            },
            "& .MuiInputAdornment-root": {
                display: "flex",
                color: "rgba(202, 202, 202, .7)",
                alignItems: "center",
            },
        }}
    >
        <OutlinedInput
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            startAdornment={
                <InputAdornment position="start" sx={{ px: 1 }}>
                    <SearchRoundedIcon />
                </InputAdornment>
            }
            endAdornment={
                <InputAdornment position="end" sx={{ px: 1 }}>
                    <TuneRoundedIcon />
                </InputAdornment>
            }
            sx={{
                "& .MuiOutlinedInput-input": {
                    padding: "8px 0",
                },
            }}
        />
    </FormControl>
);

export default SearchBar;
