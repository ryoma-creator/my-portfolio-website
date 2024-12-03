import { animate, motion } from 'framer-motion';

// To control Animation
// The animation triggers twice.
// 'exit' triggers first, with the starting position on the left and the ending position on the right.
// '%' refers to how much of the element is displayed.
// After 'exit', 'initial' (start) → 'animate' (end) triggers.

// variants
const stairAnimation = {
    initial: {
        top: '0%',
    },
    animate: {
        top: '100%',
    },
    exit: {
        top: ['100%', '0%'],
    },
}
// 注意。終了位置のところは、0%にしちゃうと表示されなくなる。
// 終了位置は、1つ目のanimationのexitの右のやつと、2つ目のanimationのanimate。


// ２回Animationは発動する
// exitが最初に発動　左が開始、右が終了位置
// ％はどれくらいの％で表示するか
//  exit後に、initial（開始）→animate（終了）が発動する。


// calculate the reverse index for staggered delay
 const reverseIndex = (index) => {
    const totalSteps = 6; // number of steps
    return totalSteps - index - 1;
 };
//  const reverseIndex2 = (index) => {
//     const totalSteps = 10; // number of steps
//     return totalSteps - index - 3;
//  };
//  indexはここでは0〜5を渡す
//  Array(数)の中の数で、totalStepsは調整できる。

// （段階的な遅延のために、逆のインデックスを計算する）
// index 0 → 5 (6 - 0 - 1 = 5) delay = 5 * 0.1 = 0.5
// index 1 → 4 (6 - 1 - 1 = 4) delay = 4 * 0.1 = 0.4
// index 2 → 3 (6 - 2 - 1 = 3)  ... 
//　つまり 0.1秒差で同じ動作を配列のindex分の数だけ回す。
// indexの後ろの方が結果の数は低いので先に発動する。

// ...Array(数)はindex数をmapで使いたいだけ

const Stairs = () => {
  return (
    <>
        {/* render 6 motion divs, each representing a step of the stairs.
        Each div will have the same animation defined by the stairsAnimation object.
        The delay for each div is calculated dynamically based on it's reversed index,
        creating a staggered effect with decreasing delay for each subsequent step
        */}
    {[...Array(6)].map((_, index) => {
        return(
        <>
        <motion.div
            key={index}
            variants={stairAnimation}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
                duration: 0.4,
                ease: 'easeInOut',
                delay: reverseIndex(index) * 0.1,
            }}
            className='h-full w-full bg-white relative'
        />

        </>
        );
    })}
    {/* easeInOut */}
        {/* 最初（in） ゆっくり始まり、
            途中 でスピードが速くなり、
            最後（out） またゆっくり終わる。 */}

    {/* ...Array(6)で配列をあえて６作る理由 */}
    {/* delayが鍵となる。
    １回の動作を６つ作り出す。
    Delayを行って１つ目の動作を後追いさせ、
    ６つの流れを作る引数としてindexを渡す。
    6つあるが、index 0,1,2,3,4,5と変わりその数で
    関数内の結果の数が変わる。その数がdelayに当てはめられる。
    イメージとしては、delayで開始を遅らせ、６回同じ動作を表示。
    次の配列は先の配列より遅れて発動して行くので、同時ではないため、
    いくつも順に表示される→何が表示されているのか単体で知りたければ、
    delayの数字を関数使わず、単品で使うといい。 */}
    </>
  );
};

export default Stairs;