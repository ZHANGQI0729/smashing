'use client';
import '../../scss/Ideas.scss';
import { FormattedMessage } from 'react-intl';

const Ldeas = () => {
    return <div className="Ideas">
        <div className="Ideas_top">
            <div className="Ideas_top_left">
                <div className="Ideas_top_left_title">
                    <h2>
                        <FormattedMessage id="Content Lab" />
                    </h2>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        marginLeft: '5px', backgroundColor: '#23005c',
                        backgroundClip: 'text',
                        color: 'transparent',
                        backgroundImage: 'radial-gradient(ellipse at 56% 59%, rgba(50, 57, 154, .62) 0, rgba(50, 57, 154, 0) 50%), radial-gradient(ellipse at 29% 34%, #2d288a 0, rgba(45, 40, 138, 0) 50%), radial-gradient(ellipse at 88% 10%, rgba(44, 117, 186, .97) 0, rgba(44, 117, 186, 0) 50%), radial-gradient(ellipse at 66% 31%, rgba(48, 95, 171, .75) 0, rgba(48, 95, 171, 0) 50%), radial-gradient(ellipse at 41% 81%, #5c32bd 0, rgba(92, 50, 189, 0) 50%), radial-gradient(ellipse at 98% 99%, rgba(142, 77, 255, .84) 0, rgba(142, 77, 255, 0) 50%), radial-gradient(ellipse at 36% 95%, rgba(70, 38, 166, .8) 0, rgba(70, 38, 166, 0) 50%), radial-gradient(ellipse at 46% 67%, rgba(94, 94, 237, .73) 0, rgba(94, 94, 237, 0) 50%), radial-gradient(ellipse at 60% 45%, rgba(47, 46, 133, .91) 0, rgba(47, 46, 133, 0) 50%)'
                    }}>
                        <i className='iconfont icon-lightning'></i>
                        <FormattedMessage id="Powered by Iris, Smashing’s AI Social Media Assistant" />
                    </div>
                </div>
                <div style={{color:'greye'}}>
                    <FormattedMessage id="Create and develop Social content faster than ever." />
                </div>
            </div>
            <div className="Ideas_top_right">
                
            </div>
        </div>
    </div>
}
export default Ldeas