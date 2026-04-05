export const trip = {
  title: '伊勢志摩 2026 互動行程地圖',
  timezone: 'Asia/Tokyo',
  days: [
    {
      id: 'd1',
      date: '2026-09-25',
      title: '出發日 - TPE → KIX',
      places: [
        {
          name: '桃園國際機場',
          time: '13:35',
          note: 'BR130 起飛',
          address: '桃園國際機場 第一航廈, Taoyuan, Taiwan',
          lat: 25.0797,
          lng: 121.2342,
        },
        {
          name: '關西國際機場',
          time: '17:15',
          note: '抵達後轉乘近鐵',
          address: 'Kansai International Airport, Izumisano, Osaka, Japan',
          lat: 34.4347,
          lng: 135.2441,
        },
        {
          name: '伊勢市站',
          note: '近鐵特急抵達',
          address: 'Iseshi Station, Ise, Mie, Japan',
        },
      ],
    },
    {
      id: 'd2',
      date: '2026-09-26',
      title: '全員抵達 - TPE → KIX',
      places: [
        {
          name: '桃園國際機場',
          time: '13:35',
          note: '其餘成員出發',
          address: '桃園國際機場 第一航廈, Taoyuan, Taiwan',
          lat: 25.0797,
          lng: 121.2342,
        },
        {
          name: '關西國際機場',
          time: '17:15',
          note: '全員抵達關西',
          address: 'Kansai International Airport, Izumisano, Osaka, Japan',
          lat: 34.4347,
          lng: 135.2441,
        },
        {
          name: '伊勢市站',
          note: '晚間抵達伊勢',
          address: 'Iseshi Station, Ise, Mie, Japan',
        },
      ],
    },
    {
      id: 'd3',
      date: '2026-09-27',
      title: '伊勢神宮周邊',
      places: [
        {
          name: '伊勢神宮 外宮（豊受大神宮）',
          address: 'Toyouke Daijingu (Geku), Ise, Mie, Japan',
        },
        {
          name: 'ふくすけ（伊勢うどん）',
          address: 'Okage Yokocho Fukusuke, Ise, Mie, Japan',
        },
        {
          name: 'おかげ横丁',
          address: 'Okage Yokocho, Ise, Mie, Japan',
        },
        {
          name: '伊勢神宮 內宮（皇大神宮）',
          address: 'Kotai Jingu (Naiku), Ise, Mie, Japan',
        },
        {
          name: 'だんご屋',
          address: 'Dangoya Okage Yokocho, Ise, Mie, Japan',
        },
        {
          name: '五十鈴茶屋',
          address: 'Isuzuchaya, Ise, Mie, Japan',
        },
        {
          name: '月讀宮',
          address: 'Tsukiyomi-no-miya, Ise, Mie, Japan',
        },
        {
          name: '倭姫宮',
          address: 'Yamatohime-no-miya, Ise, Mie, Japan',
        },
        {
          name: '焼鳥 にかわ',
          time: '19:00',
          note: '完全預約制',
          address: 'Yakitori Nikawa, Ise, Mie, Japan',
        },
      ],
    },
    {
      id: 'd4',
      date: '2026-09-28',
      title: '鳥羽 ＆ 二見浦',
      places: [
        {
          name: '一宇田展望台',
          address: 'Iuda Observatory, Ise, Mie, Japan',
        },
        {
          name: '朝熊岳金剛證寺',
          address: 'Kongoshoji Temple, Ise, Mie, Japan',
        },
        {
          name: '朝熊山展望台',
          address: 'Asamayama Observatory, Ise, Mie, Japan',
        },
        {
          name: '鳥羽水族館',
          address: 'Toba Aquarium, Toba, Mie, Japan',
        },
        {
          name: 'ミキモト真珠島',
          address: 'Mikimoto Pearl Island, Toba, Mie, Japan',
        },
        {
          name: '水沼さざえ店',
          address: 'Mizunuma Sazae-ten, Toba, Mie, Japan',
        },
        {
          name: '伊射波神社',
          address: 'Isawa Shrine, Toba, Mie, Japan',
        },
        {
          name: '二見興玉神社（夫婦岩）',
          address: 'Futamiokitama Shrine, Ise, Mie, Japan',
        },
        {
          name: 'お福餅 甘味処',
          address: 'Ofukumochi Main Shop, Ise, Mie, Japan',
        },
        {
          name: '和田金',
          note: '松阪牛すき焼き',
          address: 'Wadakin, Matsusaka, Mie, Japan',
        },
      ],
    },
    {
      id: 'd5',
      date: '2026-09-29',
      title: '賢島行程',
      places: [
        {
          name: 'いにしえの宿 伊久（Check-out）',
          address: 'Inishie no Yado Ikyu, Ise, Mie, Japan',
        },
        {
          name: '横山展望台',
          address: 'Yokoyama Observatory, Shima, Mie, Japan',
        },
        {
          name: '天ぷら とばり',
          address: 'Tempura Tobari, Shima, Mie, Japan',
        },
        {
          name: '志摩スペイン村',
          address: 'Shima Spain Village, Shima, Mie, Japan',
        },
        {
          name: '賢島寶生苑（Check-in）',
          address: 'Kashikojima Hojoen, Shima, Mie, Japan',
        },
      ],
    },
    {
      id: 'd6',
      date: '2026-09-30',
      title: '西班牙村 ＆ 地中海村',
      places: [
        {
          name: '炭火焼うなぎ 東山物産',
          address: 'Higashiyama Bussan, Shima, Mie, Japan',
        },
        {
          name: '賢島港',
          note: '英虞灣遊覽船出發',
          address: 'Kashikojima Port, Shima, Mie, Japan',
        },
        {
          name: '志摩地中海村',
          address: 'Village & Hotel Shima Mediterranean Village, Shima, Mie, Japan',
        },
      ],
    },
    {
      id: 'd7',
      date: '2026-10-01',
      title: '賢島自由日',
      places: [
        {
          name: '賢島寶生苑（Check-out）',
          address: 'Kashikojima Hojoen, Shima, Mie, Japan',
        },
        {
          name: '英虞灣遊覽船',
          address: 'Ago Bay Cruise Kashikojima, Shima, Mie, Japan',
        },
        {
          name: '的矢かきテラス',
          address: 'Matoya Kaki Terrace, Shima, Mie, Japan',
        },
        {
          name: '賢島Cafe',
          address: 'Kashikojima Cafe, Shima, Mie, Japan',
        },
      ],
    },
    {
      id: 'd8',
      date: '2026-10-02',
      title: '自由行程',
      places: [
        {
          name: '松阪站',
          address: 'Matsusaka Station, Matsusaka, Mie, Japan',
        },
        {
          name: '鳥羽站',
          address: 'Toba Station, Toba, Mie, Japan',
        },
        {
          name: '海女小屋 はまなみ',
          address: 'Ama Hut Hamanami, Toba, Mie, Japan',
        },
      ],
    },
    {
      id: 'd9',
      date: '2026-10-03',
      title: '部分成員返程',
      places: [
        {
          name: '賢島站',
          address: 'Kashikojima Station, Shima, Mie, Japan',
        },
        {
          name: '關西國際機場',
          time: '18:30',
          note: 'BR129 起飛（部分成員）',
          address: 'Kansai International Airport, Izumisano, Osaka, Japan',
          lat: 34.4347,
          lng: 135.2441,
        },
      ],
    },
    {
      id: 'd10',
      date: '2026-10-04',
      title: '返程日',
      places: [
        {
          name: '賢島站',
          address: 'Kashikojima Station, Shima, Mie, Japan',
        },
        {
          name: '關西國際機場',
          time: '18:30',
          note: 'BR129 起飛',
          address: 'Kansai International Airport, Izumisano, Osaka, Japan',
          lat: 34.4347,
          lng: 135.2441,
        },
      ],
    },
  ],
};
