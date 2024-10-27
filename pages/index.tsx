/**These are necessary imports / components for the page */
import {PageLayout} from "../src/components";
import {DEFAULT_SEO} from "../BLOG_CONSTANTS/_BLOG_SETUP";
import PSOH from "@/image/panoramic-shot-of-handyman-working-near-sink-in-kitchen.webp"
import HE from "../public/images/herobg7-e1723711806674.webp"
import CHV from "../public/images/confident-handyman-wearing-uniform-with-tool-belt2-e1723897677847.webp"
import STROKE from "../public/images/stroke3-e1723711216230.webp"
import Unoptimized from "../src/components/Image/unoptimized";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";

const Home = () => {

    return (<PageLayout home PAGE_SEO={DEFAULT_SEO}>
        <section
            className='md:container md:mx-auto w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10'>
            <div className="text-6xl flex items-center justify-end">
                <h1 className="font-extrabold mr-2">سـرویس و</h1>
                <Unoptimized src={PSOH} width="200" height="80" alt="" className=" rounded-full  mr-2"/>
                <h1 className="text-right font-extrabold mr-2">ارائـه</h1>
            </div>
            <div className="mt-8 text-6xl">
                <h1 className="text-right font-extrabold mr-2">خدمات</h1>
            </div>
            <div className="mt-14 h-[32rem] relative items-center">
                <Unoptimized src={HE} alt="" className="rounded w-full h-full"/>
                <div>
                    <Unoptimized src={STROKE} alt="" className="absolute hidden lg:block -left-4 -top-72 w-32"/>
                    <Unoptimized src={CHV} alt="" className="absolute w-[45%] -left-14 bottom-0"/>
                </div>
                <div className="">
                    <div className="bg-white absolute bottom-6 left-4 rounded-full w-1/2 h-20"></div>
                </div>
            </div>
            <div className="container mx-auto lg:px-[15px] px-0">
                <div className={'flex flex-wrap'}>
                    <FeaturedArticleSection/>
                    <h1 className='px-3 w-full mb-5 text-xl md:text-3xl font-medium'>Checkout the below articles on
                        how
                        to
                        use different layouts and components</h1>
                    <hr className='border-1 mb-5 w-[98%] mx-auto'/>
                    <HomeNonFeatureArticles/>
                </div>
            </div>
        </section>


    </PageLayout>)
}

export default Home