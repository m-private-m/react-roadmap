import Header from "@/components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export function PortfolioView(){
    const items=[
        {label:'About',onClick:()=>{}},
        {label:'Portfolio',onClick:()=>{}},
        {label:'Social',onClick:()=>{}}
    ]
    return(
        <div>
            <Header title="XXX"items={items}/>
            <Typography variant="h2" align="center">
                Welcome to My Portfolio
            </Typography>
            <Box>
                初心者プログラマです。
            </Box>
            <Link href={"https://github.com/dashboard"}>
                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width="25%"/>
            </Link>
        </div>
    )
}