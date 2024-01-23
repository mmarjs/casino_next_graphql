import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccordianUi from "@/components/Ui/AccordianUi";

export default function HomeFaqs(props) {
  const faqsList = [
    {
      id: "1",
      title: "What are the conditions of betting in the online casino?",
      summary:
        "Online casinos share many of the same conditions, rules, and laws as in-person casinos. First and foremost, you must be at least age18. (Or 21 in the United States) Online casinos also come with many terms and conditions that you will need to be familiar with before you start playing, and these can vary by casino. \n" +
        "\n" +
        "For example, each casino may have different welcome bonuses and wagering requirements. You may have to spend a certain amount of money or bet a certain number of times before you can collect any bonuses. These are what we refer to as wagering requirements. This prevents people from signing up at an online casino, receiving a bonus, and cashing out immediately. If you get a bonus of $100 and have a wagering requirement of 20x, then you would need to spend at least $2,000 before you’d be able to withdraw.\n" +
        "\n" +
        "You might also have time limits to use your welcome bonuses. For instance, if an online casino gives you 10 free spins, you may have to use them within 24 hours before they disappear. \n" +
        "\n" +
        "Also, pay close attention to the conditions around withdrawals. Some casinos place limits on how much you can win with your bonus money. Others might cap the amount you can bet using bonus money. When it’s time to withdraw your winnings, you could end up with less than you expected because of betting limitations.\n",
    },
    {
      id: "2",
      title: "Do I have to download anything to play at the online casino?",
      summary:
        "No, you should not have to download any files or software to play at an online casino. Online casinos are essentially websites that you access just like any other website. You can play the casino games directly from your desktop or mobile browser. Easily switch between casinos and games without taking up free space on your hard drive. \n" +
        "\n" +
        "Some casinos allow you to download games to your device from Google Play or the App Store, but this is not a requirement.\n" +
        "\n" +
        "In fact, you should be wary of any website that presents itself as an online casino and requires you to download something to access the games. This is likely a scam website and the files you download could be harmful viruses or malware that will damage your computer.\n",
    },
    {
      id: "3",
      title: "Is it safe to use my credit/debit card at online casinos?",
      summary:
        "Absolutely! Just like an e-commerce website or your favorite retail store, online casinos use encryption technology to protect every transaction. Your card numbers and credentials are kept safe and remain private. \n" +
        "\n" +
        "Many users prefer debit cards to credit cards for online casinos. This is because debit cards are easily accepted worldwide. It’s also beneficial to you because debit cards have spending limits. Since it’s linked to your bank account, you can only spend as much money as you actually have. And when it’s time to cash out, you can withdraw your winnings and transfer them directly to your debit card.\n",
    },
    {
      id: "4",
      title: "What is a welcome bonus?",
      summary:
        "Many online casinos offer a welcome bonus (sometimes called a sign-up bonus) to new players. This bonus usually comes in the form of free chips, plays, or credits that you can spend in the online casino, giving you a jumpstart in your gameplay. With more (free) money to play with, you can increase your chances of winning. \n" +
        "\n" +
        "However, understand that not all welcome bonuses are created equal, nor are the bigger bonuses always better. Every welcome bonus has certain requirements that players need to meet in order to receive the bonus. For instance, some casinos only allow you to use your bonus on certain games. Or, you might have to purchase a certain amount of chips or credits before you can get the bonus. Make sure you read the terms and conditions carefully and know what to expect.\n",
    },
    {
      id: "5",
      title: "What is a wager at the online casino?",
      summary:
        "Think of a wager as a bet on each game. It’s the amount of money, chips, or credits you are willing to put up for each game or round. For instance, if you are playing a wheel-spinning game where the game ends after one spin, then your wager would apply to that one spin. Or, your wager may apply to a certain session or duration of time.\n" +
        "\n" +
        "Wagers are important to understand in the world of online casinos because they usually affect your eligibility to earn bonuses. Some casinos will offer free spins, free chips, or other bonuses if you meet certain wager requirements. You will only be able to make a cash withdrawal when you meet these requirements.\n" +
        "\n" +
        "For example, let’s say you earn a cash bonus with a wagering requirement of 15x. This means you would need to bet your bonus amount 15 times over before you could collect any cash from it.",
    },
  ];

  return (
    <Grid item xs={12} md={12}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Box flexDirection="column" display="flex">
            <AccordianUi items={faqsList} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
