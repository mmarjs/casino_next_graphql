import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AlphaSigImage from "@/public/home/alpha-sig.png";
import CasinoSoftwareCard from "@/components/Casino/CasinoSoftwareCard";
import Bonus from "@/public/home/bonus.jpeg";
import RealtimeGaming from "@/public/home/realtime-gaming.png";
import PlayTech from "@/public/home/playtech.png";
import Evolution from "@/public/home/evolution.png";
import Microgaming from "@/public/home/microgaming.png";
import Aristocrat from "@/public/home/aristocrat.png";
import PlayNGo from "@/public/home/play'n-go.png";
import PragmaticPlay from "@/public/home/pragmatic-play.png";
import IGT from "@/public/home/igt.png";
import NetNet from "@/public/home/netent.png";
import Novomatic from "@/public/home/novomatic.png";

const casinoSoftwares = [
  {
    image: RealtimeGaming,
    description: `
    This is a <b>casino software</b> firm which offers software for a plethora of <b>casino games.</b> They deliver a good experience for all casino games. Some features of the RTG casino software include real-time actions, encouraging randomness, and using unique algorithms. This RTG software provides customers with formal options and integrates various payment options.`,
    width: 225,
    height: 72,
  },
  {
    image: PlayTech,
    description: `
    Playtech is one of the <b>best providers</b> of casino software in the world. They offer some of the top features of casino squats and have many games. Their software supports high-quality graphics. The software company focuses on casino optimization and offers games based on the Vegas user experience.`,
    width: 223,
    height: 72,
  },
  {
    image: Evolution,
    description: `
    Evolution gaming provides good <b>casino software</b> for a variety of casino games. Evolution remains one of the <b>best casino software</b> which many bookmakers use.
<br/><br/>
    Their software is reliable and has several features which make it appealing. Using software from this top casino provider ensures your platform is safe and free from hacks. They have, over the years developed over 100 slot games and other casino games.`,
    width: 215,
    height: 47,
  },
  {
    image: Microgaming,
    description: `
    Microgaming was created in 1994 to provide software for <b>online casinos worldwide.</b> The Microgaming software has advanced features and features which power several <b>casino games.</b><br/><br/>
    The Microgaming Viper software for casinos remains the best software that offers excellent features like autoplay for gamblers. Other features noticed include a unique interface and game statistics, allowing players to set a strategy.`,
    width: 199,
    height: 60,
  },
  {
    image: Aristocrat,
    description: `
    The Aristocrat casino software is developed mainly for slot machines. This software creates top slots like Queen of the Nile, 5 Dragon Where’s the Gold, and other exciting games.
<br/><br/>
    This casino software firm is based in Australia and is known to provide entertaining games, have fun themes, excellent graphics, and have great characters.
    `,
    width: 173,
    height: 173,
  },
  {
    image: PlayNGo,
    description: `
    This is <b>one of the best casino providers</b> many European bookmakers usually patronize. Play N go offer their customers unique games, entertaining and fun. Their software integrates many features that bookmakers will love. 
<br/><br/>
    They have security features that guarantee that online casino platforms aren’t hacked. They are known for their array of slots games in which players can win many games.
    `,
    width: 194,
    height: 59,
  },
  {
    image: PragmaticPlay,
    description: `
    This is a <b>top online casino software</b> that is a global brand. The pragmatic play uses the latest technology to develop software for casino games. Their casino software has an exemplary user interface and good security features.
<br/><br/>
All their slot games come with an RNG algorithm that guarantees fairness. Pragmatic is a reputable company with many branches in Europe and South America.

`,
    width: 214,
    height: 80,
    mb: true,
  },
  {
    image: IGT,
    description: `
    The Interactive Gaming Technology is a<b> casino software</b> that offers good software for Slots. In 2005, the firm took over Waterworks and entered the online casino market.
<br/><br/>
    This is a severe gambling firm with years of experience as a game provider. IGT provides services that include streaming, mobile download capabilities, and others. This firm has connections with global gaming brands like the wheel of fortune and monopoly.

`,
    width: 154,
    height: 62,
  },
  {
    image: NetNet,
    description: `
    The NetEnt casino software firm entered the ambling market in 1996. They have made a name for themselves by using the Ultimate gaming experience. NetEnt had operated in one of the top names in gambling and casinos.

`,
    width: 154,
    height: 72,
  },
  {
    image: Novomatic,
    description: `
    They are also known as Novoline. It is a gambling software that was designed for traditionally based slot machines. However, due to the improvement in online gambling, this software has been upgraded and used to create several casino games. Many European bookmakers use this software because of its simplicity and a great feature.
<br/><br/>
The slot games the Novomatic are used to develop are available via streams and doesn’t require download. This casino software is used to design online casino games with great graphics and sounds.


`,
    width: 215,
    height: 72,
  },
];

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: `-${theme.spacing(3.5)}`,
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(10),
    paddingLeft: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    borderRadius: "22px",
    background: theme.palette.secondary.dark,
    border: `1px solid ${theme.palette.border.main}`,
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    "& h2": {
      fontSize: "29px",
      lineHeight: "43.5px",
      marginBottom: theme.spacing(2),
    },
    "& h3": {
      fontSize: "26px",
      lineHeight: "39px",
      marginBottom: theme.spacing(2),
    },
    "& h4": {
      fontSize: "23px",
      lineHeight: "34.5px",
      marginBottom: theme.spacing(2),
    },
  },
  img: {
    borderRadius: "22px",
  },
}));

export default function HomeInfo() {
  const classes = useStyles();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className={classes.wrapper}>
      <Box display="flex">
        <Box mb={4}>
          <Typography component="h2" variant="h2">
            How to find a good casino
          </Typography>
          <Typography component="p" variant="body1" mb={3}>
            Choosing the<b> best online casinos</b> is more necessary than most
            players think because when you register with the right casino, you
            get to enjoy the benefits. Moreover, reviewing thousands of casinos
            and their features isn’t easy. So how do one choose the best online
            casino? How can a casino player know that the casino website offers
            <b> slows games</b>, <b>enormous bonuses</b> or <b>quick payouts</b>
            ?
          </Typography>
          <Typography component="p" variant="body1">
            How can a casino player avoid fraudulent websites that want to cheat
            you? Here is comprehensive information about how to choose an online
            casino.
          </Typography>
        </Box>
        <Box flexShrink={0}>
          <Image
            src={AlphaSigImage}
            width={isMobile ? 261 / 2 : 261}
            height={isMobile ? 266 / 2 : 266}
          />
        </Box>
      </Box>
      <Box mb={4}>
        <Typography component="h3" variant="h3">
          Welcome bonuses
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          An<b> online casino offers welcome bonuses</b> to new customers.
          Bookmakers are many, and they always try to outdo one another. The
          competition among these bookmakers is fierce, that’s why they offer
          different rewards. <b>Welcome bonuses</b> are a good way these online
          bookies attract new customers.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          A <b>welcome bonus </b>is a percentage of your initial deposit. When
          you register on the casino site, make a deposit, and you will be
          gifted a portion of your deposit. Depending on the{" "}
          <b>online casino</b> site you are using, these percentages defer. Many
          casino sites offer around <b>100%-300% welcome bonuses.</b>
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          <b>Welcome bonuses</b> are significant because they give you some
          additional cash to stake on your favorite games. This provides a
          financial muscle for you to take that risk in{" "}
          <b>Online casino betting</b>. For newbies in <b>online gambling</b>, a
          welcome bonus allows you to explore new games and options without
          losing your capital. All gamblers need to register with an{" "}
          <b>online casino</b> that offers fantastic wagering requirements.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          However, it’s important to note that <b>welcome bonuses</b> come with
          some terms and conditions which you need to adhere to. Though there
          aren’t general conditions, however, many bookies don’t allow you to{" "}
          <b>withdraw a welcome bonus</b> except you use it to stake. Also, you
          don’t just stake with it, and sometimes you must stake and win with a
          welcome bonus at least 4 times before you can withdraw.
        </Typography>
        <Box my={6} mx={4}>
          <Image
            className={classes.img}
            src={Bonus}
            height={185}
            width={1012}
            objectFit="cover"
          />
        </Box>
      </Box>
      <Box mb={4}>
        <Typography component="h3" variant="h3">
          Casino Software
        </Typography>
        <Typography component="p" variant="body1" mb={7}>
          When choosing the<b> best online casinos,</b> it’s crucial always to
          consider the software they use for their games. The{" "}
          <b>online casino software</b> that is reliable includes:
        </Typography>
        <Grid container spacing={7}>
          {casinoSoftwares.map((casino, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <CasinoSoftwareCard
                description={casino.description}
                imageProp={{
                  src: casino.image,
                  width: casino.width,
                  height: casino.height,
                }}
                mb={casino.mb}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box mb={4}>
        <Typography component="h3" variant="h3">
          Customer Support
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          How reliable <b>customer support is crucial</b> to why you should
          choose them. The <b>best online casinos</b> should have a sound{" "}
          <b>24/7 hour support system</b>. These should be done via live chats,
          email support, and other avenues where customers can make inquiries.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Customer support is comprehensive, and you expect the Top casino sites
          to have the following:
        </Typography>
        <Box component="ul" mb={3}>
          <li>
            <b>Great Response Time </b> : It’s essential for customer service to
            always respond fast to inquiries. No casino players want to wait
            weeks or months before they get a response from the support team.
          </li>
          <li>
            <b> Label :</b> Customer support agents of <b>online casinos</b>{" "}
            should always have good etiquette when talking to a player. Knowing
            how to talk to customers is essential because they are the king.
            Only deal with online casinos with friendly customer agents.
          </li>
          <li>
            <b> Highly skilled Staff :</b> The <b>best online casinos</b> will
            have experts as customer service agents. These staff are necessary
            because they will be able to solve the difficult task and help
            customers out with payment issues.
          </li>
        </Box>
      </Box>
      <Box mb={4}>
        <Typography component="h3" variant="h3">
          Security and Privacy
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          When choosing the<b> best online casinos</b>, security is essential.
          Here are some security options to check with online casinos:
        </Typography>
        <Box component="ul" mb={3}>
          <li>
            <b>Data Encryption </b> : Most <b>top online casinos</b> use a 128
            or 256-bit encryption system. This ensures that whatever information
            you input into their system cannot be hacked. This security has a
            level of protection that depends on your casino. To be assured that
            the online casino you use has Dara security, check your toolbar for
            the SSL certificate.
          </li>
          <li>
            <b> Random Number Generator </b> : A <b>random number generator</b>{" "}
            (RNG) is software that guarantees randomness and fair play among
            casinos played. The algorithm ensures the results are random. The
            algorithm works with seed numbers to ensure the <b>casino games</b>{" "}
            are not hackable.
          </li>
        </Box>
      </Box>
      <Box mb={4}>
        <Typography component="h2" variant="h2">
          Online Casinos Welcome Bonuses
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          When choosing the <b>best online casinos</b>, security is essential.
          Here are some security options to check with online casinos:
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h3" variant="h3">
          Online casino deposit bonuses
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          <b> Deposit bonuses</b> are typical sign-up bonuses offered online
          casinos give their members when they make their first deposit. These
          deposit percentages are calculated based on the amount you credit your
          account with.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          These deposit bonuses come with some conditions which users must
          adhere to before they use them. Casino players must use these deposit
          bonuses seven days before it expires.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h3" variant="h3">
          No deposit bonuses: Free Money
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          <b> No deposit bonuses</b> are offered from bookmakers to new
          customers who just registered their accounts. These no deposit bonuses
          are free money given to customers who don’t have any money in their
          accounts.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          All<b> online casino bonuses</b> don’t give these welcome bonuses, but
          some. You can’t withdraw these categories of the welcome bonus, and
          you must wage with them at least 5 times before you can withdraw.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h3" variant="h3">
          Online Casinos welcome free spins
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Another type of welcome is house-free spins. <b>Free spins</b> are
          sign-up rewards given to new people on slot machines. The top casino
          platforms offer between 200-and 300 free spins for their customers.
          These free spins give players chances to roll spins and win lots of
          money.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h2" variant="h2">
          How to find a good online casino?
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          When finding an excellent <b>online casino</b>, there are certain
          things you should look out for :
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h4" variant="h4">
          License and regulations
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Only choose an <b>online casino</b> that has a suitable casino license
          and is registered with the best gambling regulations around. Licenses
          are essential because they separate reliable and fake online casinos.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Most online casinos collect their <b>gambling licenses</b> from
          regulators like the UK gambling commission, Curacao gaming authority,
          Malta gaming authority, and the Isle of Man gambling commission.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h4" variant="h4">
          Security
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Security is paramount when choosing an online casino. Only register
          with a gambling platform with a sound <b>encryption system</b> where
          all your information is safe. Not all gambling sites have sound
          security systems which can keep hackers and scammers out of your data.
          SSL security is a must because it protects members’ identities.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h4" variant="h4">
          Great bonuses
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          All casino players want to win money and make profits. There is no
          easier way to win casino games than bonuses offered by online casino
          forums. There are several bonuses and rewards to consider when using
          online casino sites. These bonuses include <b>welcome bonuses</b>,{" "}
          <b>freerolls</b>,<b> cashback options</b>, and <b>VIP fewards</b>.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h4" variant="h4">
          Casino games offered
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Another option to choose when dealing with <b>online casino</b> sites
          is the games they offer on their platforms. Choose the{" "}
          <b>best online casinos</b> that have many games, which increases your
          options of winning.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Games offered by these online casino sites are poker, online roulette,
          Baccarat, Blackjack, crap, and keno. These games also have various
          versions which you can try out.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h4" variant="h4">
          Payment options
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Another factor to consider when selecting the{" "}
          <b>best online casinos </b>
          are the payment options offered and allowed by the platform. There are
          several good <b>payment options</b> available, and they are skrill,
          Payoneer, credit card, and cryptocurrency.
        </Typography>
        <Box my={6} mx={4}>
          <Image
            className={classes.img}
            src={Bonus}
            height={185}
            width={1012}
            objectFit="cover"
          />
        </Box>
      </Box>

      <Box mb={4}>
        <Typography component="h2" variant="h2">
          How to deposit on an online casino?
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          When you want to deposit in an online casino, there are several
          options. These options come with different steps, and when you have a
          problem, you will need to contact. You can use the various banking
          options to<b> deposit on online casinos</b>, and they are Bank
          transfers, credit cards, e-checks, and e-wallet options.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h3" variant="h3">
          Can I deposit with PayPal on an online casino?
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          You can use <b>PayPal</b> to deposit on an <b>online casino</b>, as
          most online casinos accept PayPal as a reliable payment method.
          However, PayPal isn’t the only payment option you can use in an online
          casino; others you should consider include:
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h4" variant="h4">
          Credit and Debit cards
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Asides from PayPal, online casino players can deposit using the
          various <b>credit cards </b>offered. This is a standard banking method
          among players all over the world. Virtually all the best online
          casinos accept <b>credit and debit cards</b>.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          However, you have to be careful because not all debit and credit cards
          are accepted. The popular cards accepted at online casinos are Visa,
          Mastercard, and America Express. Credit card deposits are processed
          immediately, and you can expect your funds to reflect immediately.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Most gambling sites allow you to withdraw your funds back to the card
          you deposit with. While many online casino websites accept credit card
          transactions, some providers might block payment processing.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h4" variant="h4">
          Bank Transfer
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          This payment mode, also known as <b>wire transfer</b>, is popular
          among overseas players. This payment type is excellent when you want
          to wager massive money. Many big rollers usually engage in this mode
          of payment because it involves enormous funds.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Many people who aren’t as comfortable leaving their credit card
          information on the online casinos. The main problem with this casino
          payment method is that it takes time before your financial institution
          confirms it. When trying to deposit using a bank transfer, you can use
          a bank app to do it quickly.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h4" variant="h4">
          E-wallet Options
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          E-wallets are excellent financing options that are similar to bank
          accounts. They are simple to set up and can be funded efficiently.
          These funding methods are simple to use because they are simple and
          are used by many sites. There are many e-wallet options you can use
          when depositing in an online casino. Some <b>e-wallet option</b>s are{" "}
          <b>Skrill</b> and<b> Payoneer</b>.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h4" variant="h4">
          Money transfer services.{" "}
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Another method is paying online casinos are the money transfer options
          available. You could use services like <b>Wise</b>,
          <b> Western Union</b>, and<b> Ria</b> to pay on the various online
          casino sites.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h4" variant="h4">
          Checks
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          You could also use checks when playing on online casinos and use them
          to deposit. Your checks have to be cleared before you can be credited
          to your online casino account. This is a{" "}
          <b>highly secure payment method</b> because you don’t have to share
          your information online. The problem with depositing checks is that it
          takes some time before it clears, which puts many people off from
          using it.
        </Typography>
      </Box>
      <Box my={6} mx={4}>
        <Image
          className={classes.img}
          src={Bonus}
          height={185}
          width={1012}
          objectFit="cover"
        />
      </Box>
      <Box mb={4}>
        <Typography component="h2" variant="h2">
          How to withdraw from an online casino?
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Those familiar with<b> online casinos</b> know that you can credit
          your account quickly. However, after winnings, what are the options to
          withdraw the funds into your account.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h3" variant="h3">
          Credit and Debit Card
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Usually, most online casinos allow you to withdraw your winnings using
          the various <b>credit and debit cards</b> available. You will have to
          link these cards with your account to withdraw to your accounts.
          Usually, people withdraw to Visa and Mastercard because most online
          casinos support them.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          It isn’t easy to find <b>online casinos</b> that can accept
          withdrawals to other credit cards. This casino withdrawal method comes
          with some problems, though, it could take about three to five days
          before the funds show up in your account.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h3" variant="h3">
          Skrill
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          This is an <b>e-wallet</b> and digital platform where you can withdraw
          your funds to. It’s a reasonable solution for{" "}
          <b>easy money withdrawal </b>since when it was developed because it is
          used by millions of people worldwide.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Skrill is unique because it is easy to sway from one currency to
          another, so overseas players have no problem using this excellent
          withdrawal method. Transfers using the skrill payment method are fast,
          and your account will be credited quickly.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h3" variant="h3">
          Paysafecard
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Although this is a parent company to Netteller, this is a payment
          method <b>available in over 100 countries</b>. While common among
          individuals, this payment method is also with many commercial firms.
          Casino players using the Paysafe card can use it to both withdraw
          funds and deposit money into their PayPal account.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          This assures them to keep playing slots and other games. You don’t
          need to access your bank account to open a Paysafe account.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography component="h3" variant="h3">
          Bank Transfer
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Casino players who want to transfer money from an online bookmaker
          straight into your account can use this option. This is a standard
          withdrawal option for those who want to get funds into their
          <b> bank accounts</b>.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          Many casino players consider it a safe option when withdrawing from
          their bank accounts. The pros of bank accounts are that you dint need
          any subsidiary to withdraw your funds. However, it comes with its
          drawbacks, which are there are delays when using this option to
          withdraw funds.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          For some banks, it takes about three to five days for your bank
          account to be credited. Also, many casino players are wary of the
          security issues with these withdrawal options. It doesn’t sit down
          well when you give a third party issue your bank information.
        </Typography>
        <Typography component="p" variant="body1" mb={3}>
          There are numerous best online casinos you could register with;
          however, some bookmakers are more credible than others. There are
          several factors to consider when choosing an online casino, including
          bonuses, payment methods, UX interface, various casino games, and
          payment methods. Choosing the best online casinos helps you make the
          best decision when staking on games online.
        </Typography>
      </Box>
    </Box>
  );
}
