import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import LogoImage from "@/public/home/logo.png";

export default function HomeAbout() {
  return (
    <Box flexDirection="column" display="flex">
      <Box width={245} mx="auto" mb={1}>
        <Image src={LogoImage} width={245} height={245} />
      </Box>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        mb={2}
        fontSize={26}
      >
        HyCasino - The best online casino bonuses 2022
      </Typography>
      <Box maxWidth={970} mx="auto">
        <Typography variant="body1" component="p" align="center" mb={6}>
          The<b> online casino</b> industry has become a haven for many people
          who love taking on casino games. Seeking the
          <b> best online casinos</b> to wager with real money isn’t easy. There
          are several things to consider when choosing a{" "}
          <b>top online casino</b> to wager on, and these include license,
          reputation, games offered, and other factors. Gambling has come a long
          way, and players need to avoid staking with online platforms that
          don’t offer good betting services. These online casinos allow payment
          via credit cards, PayPal, cryptocurrency, e-wallet options, and
          checks.{" "}
        </Typography>
        <Typography variant="body1" component="p" align="center" mb={3}>
          The benefits of using the<b> best online gambling sites in 2022</b>{" "}
          are many, and they offer players
          <b> fast withdrawal</b>,<b> huge bonuses</b>, <b>loyalty rewards</b>,
          and <b>welcome bonuses</b>. We will discuss finding a good casino you
          can stake with, the various<b> online casino bonuses</b> you can get,
          and how to deposit and withdraw on online casino websites.{" "}
          <b>Deposit bonuses</b> come with some conditions which users must
          adhere to before they use them.
        </Typography>
        <Typography variant="body1" component="p" align="center">
          Casino players must use these <b>deposit bonuses</b> seven days before
          it expires. It takes some time before it clears, which puts many
          people off from using it. If you want to know about the{" "}
          <Box component="b" color="#DDDDDD">
            best online casinos in 2022,
          </Box>{" "}
          read on.
        </Typography>
      </Box>
    </Box>
  );
}
