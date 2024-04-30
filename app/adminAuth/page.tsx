"use client"
import { Box, Button, Stack, TextField } from "@mui/material"
import { signIn } from "next-auth/react"
import { useSearchParams, useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"
export default function CreateAdmin() {

    const params = useSearchParams();
    const redirect = params.get('redirect');
    const router = useRouter()

    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const updateUsername = (e: ChangeEvent<HTMLInputElement>) => {
        const newData = {...data, username: e.target.value};
        setData(newData);
    }
    const updatePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const newData = {...data, password: e.target.value};
        setData(newData);
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await signIn('credentials', {
            ...data,
            redirect: false
        });

        if (redirect) {
            router.push(`/${redirect}`);
        } else {
            router.push('/');
        }
    }

    return (
        <Box px={60} py={10}>
        <form onSubmit={handleSubmit}>
        <Stack spacing={8} px={20} py={10} sx={{
            bgcolor: '#bfc5c7'
        }}>
            
                <TextField
                    sx={{
                        bgcolor: 'white'
                    }}
                    id="username"
                    label="Username"
                    variant="outlined"
                    value={data.username}
                    onChange={updateUsername}
                    type="text"
                />
                <TextField
                    sx={{
                        bgcolor: 'white'
                    }}
                    id="password"
                    label="Password"
                    variant="outlined"
                    value={data.password}
                    onChange={updatePassword}
                    type="password"
                />
                <Button variant="contained" type="submit">Submit</Button>
            
        </Stack>
        </form>
        </Box>
    )
}