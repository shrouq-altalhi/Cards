import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Store from "./components/Store";
import { Grid } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="gridCards">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Store
            name="UI/UX"
            isNew={true}
            disc="UI/UX تُقدم #أكاديمية_طويق دورة Figma من البداية حتى الاتقان
              باستخدام"
            imageURL="https://pbs.twimg.com/media/FgFI0-CakAI1f_Z?format=jpg&name=medium"
          />

          <Store
            name="No-Code"
            disc="تصميم مواقع الويب من الصفر نقدم لكم دورة تصميم المواقع بمنهجية No-Code"
            isNew={false}
            imageURL="https://pbs.twimg.com/media/FgA0qioXoAAS4Wb?format=jpg&name=4096x4096"
          />

          <Store
            name="Git & GitHub"
            disc="Git & GitHub تُقدم #أكاديمية_طويق دورة من البداية حتى الاتقان"
            isNew={true}
            imageURL="https://pbs.twimg.com/media/Ff58dCqWIAAcgSS?format=jpg&name=4096x4096"
          />

          <Store
            name="DS and Machine Learning"
            disc="للتعرف على علم البيانات وكيفية تحليلها ومعالجتها وعرضها ونمذجتها! Data Science and Machine Learning"
            isNew={false}
            imageURL="https://pbs.twimg.com/media/FeVoJ5PXoAU63PE?format=jpg&name=4096x4096"
          />
          <Store
            name="DevOps"
            disc="تعلم أهمية DevOps وأساسياته من خلال تطبيق عملي على أساسيات Linux, Docker, and Docker Compose وذلك بالانضمام لدورة مقدمة في DevOps"
            isNew={true}
            imageURL="https://pbs.twimg.com/media/Ff562W7WQAIYK3T?format=jpg&name=medium"
          />
          <Store
            name="دورة تطوير تطبيقات iOS"
            disc="لدورة تطوير تطبيقات iOS باستخدام SwiftUI"
            isNew={true}
            imageURL="https://pbs.twimg.com/media/FfyBLXEXoAA81Au?format=jpg&name=medium"
          />

          <Store
            name="دورة برمجة متحكم الاردوينو"
            isNew={true}
            disc="دورة برمجة متحكم الاردوينو لمعرفة المهارات الأساسية في صنع الدوائر الإلكترونية والمهارات الأساسية في برمجة Hardware"
            imageURL="https://pbs.twimg.com/media/FgaNfCxWAAIRRSN?format=jpg&name=medium"
          />

          <Store
            name="هندسة البيانات"
            disc="دورة متخصصة تتعلم عبرها المفاهيم الأساسية في هندسة البيانات وبعض التقنيات المستخدمة في ذلك."
            isNew={false}
            imageURL="https://pbs.twimg.com/media/Fdwy--kWYAAr_jn?format=jpg&name=4096x4096"
          />

          <Store
            name="التصميم والتصنيع الرقمي للمبتدئين"
            disc="للمهتمين بالرسم الهندسي والتصميم ثلاثي الأبعاد؛"
            isNew={true}
            imageURL="https://pbs.twimg.com/media/FdsMcAdXgAAUk7m?format=jpg&name=4096x4096"
          />

          <Store
            name="Python"
            disc="بناء مواقع الويب باستخدام لغة Python"
            isNew={false}
            imageURL="https://pbs.twimg.com/media/FdsKOhVWIAM_WAI?format=jpg&name=4096x4096"
          />
          <Store
            name="Kotlin"
            disc="لتعلم لغة Kotlin المعتمدة من Google في تطوير تطبيقات Android ذات قدرات عالية وبشكل احترافي، انضم لدورةمبادئ في لغة Kotlin وتطوير تطبيقات Android"
            isNew={true}
            imageURL="https://pbs.twimg.com/media/FdnC38gWYA0KsWr?format=jpg&name=large"
          />
          <Store
            name="دورة تطوير تطبيقات iOS"
            disc="لدورة تطوير تطبيقات iOS باستخدام SwiftUI"
            isNew={true}
            imageURL="https://pbs.twimg.com/media/FfyBLXEXoAA81Au?format=jpg&name=medium"
          />
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default App;
