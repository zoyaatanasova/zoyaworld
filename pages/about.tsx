import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => (
  <Page
    title="За мен"
    description="Здравейте! Аз съм Зоя Атанасова - майка, съпруга, любител кулинар и пътешественик. !"
  >
    <Prose>
      <p>Тук ще научите повече за мен</p>
    </Prose>
  </Page>
);

export default About;
