import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Work Experience / Volunteer Projects:',
    paragraph: 'One of the biggest things that was stressed to me in high school was gaining work experience. I have had a multiude of different community service projects and internships that have ultimately helped me grow as an individual. Through these various activites I have learned the importance of hard work, dedication, and most importantly the affect one person can make on the world.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Community Service in Depth:
                  </div>
                <h3 className="mt-0 mb-12">
                  Volunteering for Different Fundraisers and Pojects for my Community:
                  </h3>
                <p className="m-0">
                I first got started in community service as a sophomore when I joined the Natinal Honor Society. I will admit, at first I looked at volunteering as something I had to do because it was a requirement for the program. However, as I started to do more projects I began to realize that I was making an actual difference in my community. I began to enjoy all the trips I had to make to the senior center, and the fundrasiers we put on for Relay for Life. While these acts seemed small at the time, I was becoming a contributing factor to the positive change that was occuring in my community.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Summer Internship in Depth:
                  </div>
                <h3 className="mt-0 mb-12">
                  Journalism and Broadcasting Internship For Red Earth:
                  </h3>
                <p className="m-0">
                  This summer, before I started college, I was able to land an internship with the non-profit organization known as Red Earth. This organization every summer host the native art festival in Oklahoma and through their organizatiion they host various internships dealing with jobs related to the arts. In the beginning, my job was to do research on one of the artist and conduct an interview at the actual festival. This part only lasted one weekend so afterwards I figured I was done. However, they called me back the next week and asked me to create a video for their website. I have literally no experience at all with video editing and here I am a week before college is about to start trying to create a noteworthy video. While we did not end up having enough time to finish the project, I ended up learning a great deal not only about the career I am pursuing but also about myself. I have never considered myself a tech savy person and definitely did not think I was capable of accomplishing what I did yet I overcame this struggle. I persisted and told myself at times when I was frustrated that I could do anything I set my mind to.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  My One Week Summer Job in Depth:
                  </div>
                <h3 className="mt-0 mb-12">
                  Working Corn:
                  </h3>
                <p className="m-0">
                  This past summer one of my best friends convinced me to work corn with her at a local farm in McLoud, Oklahoma. I was told this was going to be super easy work, but man was I mistaken. We started every morning at 6 a.m. and didn't finish until usually 5 p.m. Not to mention this was intense manual labor. However, while yes I did hate it almost everyday I worked it, I don't regret doing it at all. I learned some valuable skills such as hard work, endurance, and to always look at the positives.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;