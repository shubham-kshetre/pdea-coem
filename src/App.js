import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Box, Typography } from "@mui/material";
import HeroSection from "./Components/HeroSection/HereSection";
import Records from "./helper/Records/Records";

const LandingPage = () => {
  return (
    <Box className="parent">
      <HeroSection />

      {/* Dummy Div */}
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        consequatur, obcaecati eaque ratione tempora temporibus aperiam.
        Consequuntur vitae odit ipsum doloremque labore quisquam, ea aut nostrum
        quaerat fugiat ducimus inventore. Sapiente magnam a nostrum. Praesentium
        ad numquam a at deserunt laudantium, minima possimus libero doloribus!
        Magnam officiis assumenda, illum architecto blanditiis amet dolores,
        adipisci a aut voluptas corporis ipsam velit! Laboriosam sunt maxime
        aliquam consectetur fuga nihil unde libero odit, obcaecati deserunt non
        ad. Ab ipsa ut dolore libero aspernatur aliquid itaque fuga, quibusdam
        ducimus obcaecati asperiores deleniti quidem repellat. Quibusdam amet
        consequatur perferendis? Quis natus molestiae quos autem laborum
        recusandae, quia harum maiores quaerat itaque. Provident necessitatibus
        placeat sunt et veritatis, facilis culpa optio, pariatur quasi
        dignissimos soluta magni. Tenetur, neque repellat repellendus laudantium
        sit nostrum laboriosam et minima iste illo sed eaque quo quibusdam eum
        deserunt adipisci possimus error consectetur consequatur molestias
        recusandae a sapiente doloribus? Rerum, ad? Vel voluptas tempore ducimus
        quasi temporibus veniam voluptate architecto iure odit molestias. Rerum
        ab temporibus, quidem modi molestiae eveniet enim nesciunt et reiciendis
        esse magni laborum quas placeat, voluptas veniam? Aperiam fugit quisquam
        laboriosam, commodi non iste error itaque porro harum, ab odio cumque
        amet veritatis architecto animi repellat laudantium hic aut ad
        voluptatum assumenda, sequi reiciendis. Rem, assumenda et. Expedita
        labore delectus quibusdam vero omnis minima ut a odit tenetur eligendi
        sequi perspiciatis praesentium numquam tempora, impedit ducimus
        provident, mollitia corrupti unde quaerat voluptatem quam et.
        Aspernatur, doloribus eos? In possimus laudantium optio. Eum, ut
        reiciendis ratione maiores ex delectus quaerat dicta, quam a vero autem
        ipsam nemo. Placeat, facere voluptate obcaecati exercitationem alias
        maxime iusto suscipit facilis magni? Est sint necessitatibus architecto
        repudiandae inventore culpa fugiat maxime cum odit aspernatur? Obcaecati
        iusto tempora labore ipsa rem velit porro cumque provident alias
        expedita, possimus mollitia iure natus quo ducimus! Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Cupiditate sunt officiis quidem
        quibusdam voluptatum unde, aliquam velit consequatur expedita eius
        asperiores optio odit modi porro, qui ipsum neque iusto esse. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Atque quibusdam
        magni aperiam ducimus pariatur voluptate, porro, aliquid harum nulla
        fuga Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
        vero atque eveniet repellat, omnis fuga doloremque quis inventore,
        dignissimos soluta voluptatum tempore! Sint, nesciunt recusandae
        blanditiis beatae at similique maxime. officiis vel alias commodi
      </div>

      <Box
        sx={{
          background: "black",
          color: "white",
          padding: "24px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ padding: "4px", paddingX: "12px" }}>
          <Records number={200} />
          <Typography variant="h4">Happy Students</Typography>
        </Box>

        <Box sx={{ padding: "4px", paddingX: "12px" }}>
          <Records number={200} />
          <Typography variant="h4">Placements</Typography>
        </Box>

        <Box sx={{ padding: "4px", paddingX: "12px" }}>
          <Records number={200} />
          <Typography variant="h4">Teachers</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
