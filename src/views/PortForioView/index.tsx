import React, {useRef} from "react";
import Fotter from "@/components/Footer";
import Header from "@/components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export function PortfolioView(){
    const domRef = useRef<HTMLDivElement>(null);
    const handleSelectItem =()=>{
        console.log(domRef.current)
        if (domRef.current) {
            domRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }
    const items=[
        {label:'About',onClick:handleSelectItem},
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
            <Box>
                ~~~~~~~~~~~~~<br/>
                  ~~~~~~~~~~~~~<br/>
                   ~~~~~~~~~~~~~<br/>
                    ~~~~~~~~~~~~~<br/>
                     ~~~~~~~~~~~~~<br/>
                      ~~~~~~~~~~~~~<br/>
                 ~~~~~~~~~~~~~<br/>
                  ~~~~~~~~~~~~~<br/>
                   ~~~~~~~~~~~~~<br/>
                    ~~~~~~~~~~~~~<br/>
                     ~~~~~~~~~~~~~<br/>
      ~~~~~~~~~~~~~<br/>
                  ~~~~~~~~~~~~~<br/>
                   ~~~~~~~~~~~~~<br/>
                    ~~~~~~~~~~~~~<br/>
                     ~~~~~~~~~~~~~<br/>
                      ~~~~~~~~~~~~~<br/>
                 ~~~~~~~~~~~~~<br/>
                  ~~~~~~~~~~~~~<br/>
                   ~~~~~~~~~~~~~<br/>
                    ~~~~~~~~~~~~~<br/>
                     ~~~~~~~~~~~~~<br/>

            </Box>
            <Box>
                <div ref={domRef}/>
                Reactをを使用して約1年のビギナーです。
                さらにフロントエンド開発のスキルアップを目指しています
            </Box>
            <Fotter/>
        </div>
    )
}