import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function TabBar() {
  const data = [
    {
      label: "蛋糕",
      value: "蛋糕",
      desc: ` 愛默生深信，我們想的是如何養生，如何聚財，如何加固屋頂，如何備齊衣衫; 而聰明人考慮的卻是怎樣選擇最寶貴的東西——朋友。這句話改變了我的人生。我們不得不面對一個非常尷尬的事實，那就是，這樣看來，點心因何而發生？
      做好點心這件事，可以說已經成為了全民運動。`,
    },
    {
      label: "餅乾",
      value: "餅乾",
      desc: ` 既然，謹慎地來說，我們必須考慮到所有可能。魯迅告訴我們，“一勞永逸”的話，有是有的，而“一勞永逸”的事卻極少。但願諸位理解後能從中有所成長。
      一般來講，我們都必須務必慎重的考慮考慮。克雷洛夫曾經提過，交上了壞朋友的人，是難以得到世人的敬重的。這段話看似複雜，其中的邏輯思路卻清晰可見。點心的存在，令我無法停止對他的思考。`,
    },

    {
      label: "蛋塔",
      value: "蛋塔",
      desc: ` 俗話說的好，掌握思考過程，也就掌握了點心。對我個人而言，點心不僅僅是一個重大的事件，還可能會改變我的人生。吳起曾講過，用兵必須審敵虛實而趨其危。這讓我對於看待這個問題的方法有了巨大的改變。點心勢必能夠左右未來。哥爾斯密說過一句很有意思的話，法律總是蹂躪赤貧者，而闊人們總是支配法律。這段話的餘韻不斷在我腦海中迴盪著。`,
    },

    {
      label: "禮盒",
      value: "禮盒",
      desc: ` 愛默生深信，我們想的是如何養生，如何聚財，如何加固屋頂，如何備齊衣衫; 而聰明人考慮的卻是怎樣選擇最寶貴的東西——朋友。這句話改變了我的人生。我們不得不面對一個非常尷尬的事實，那就是，這樣看來，點心因何而發生？
      做好點心這件事，可以說已經成為了全民運動。`,
    },

    {
      label: "冰品",
      value: "冰品",
      desc: `  世界需要改革，需要對點心有新的認知。把點心輕鬆帶過，顯然並不適合。
      培根深信，習慣真是一種頑強而巨大的力量，它可以主宰人生。因此，人自幼就應該通過完美的教育，去建立一種好的習慣。這段話非常有意思。`,
    },
  ];

  return (
    <Tabs value="蛋糕" className="w-full">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="font-bold text-dark">
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
